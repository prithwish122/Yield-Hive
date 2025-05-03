"use client"

import { useState } from "react"
import { Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react"
import { useWriteContract } from "wagmi"
import yhtAbi from "@/contract/yhtAbi.json"

export default function TokenClaimBox() {
  const [lastClaimed, setLastClaimed] = useState<Date | null>(null)
  const [claimable, setClaimable] = useState(100)

  // Calculate time until next claim
  const getTimeUntilNextClaim = () => {
    if (!lastClaimed) return "Claim now"

    const now = new Date()
    const nextClaimTime = new Date(lastClaimed)
    nextClaimTime.setHours(nextClaimTime.getHours() + 24)

    const diffMs = nextClaimTime.getTime() - now.getTime()
    if (diffMs <= 0) return "Claim now"

    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

    return `${diffHrs}h ${diffMins}m`
  }

  const getProgressValue = () => {
    if (!lastClaimed) return 100

    const now = new Date()
    const nextClaimTime = new Date(lastClaimed)
    nextClaimTime.setHours(nextClaimTime.getHours() + 24)

    const totalMs = 24 * 60 * 60 * 1000
    const elapsedMs = now.getTime() - lastClaimed.getTime()
    const progressPercent = Math.min(100, (elapsedMs / totalMs) * 100)

    return progressPercent
  }

  const storageSC = "0xf06ccdf5a06d4781532f6a788234311bb705a7b0"

  const { isConnected } = useAppKitAccount() // AppKit hook to get the address and check if the user is connected
  const { chainId } = useAppKitNetwork()  // to get chainid
  const { writeContract, isSuccess } = useWriteContract()  // to interact with contract

  const handleInitialClaim = () => {
    console.log("INSIDE CLAIM FUNCTION")

    if (!isConnected) {
      console.log("please sign up");

      return
    }
    try {
      console.log("Faucet for YHT TOKEN initiated,========================")
      writeContract({
        address: storageSC,
        abi: yhtAbi,
        functionName: 'claimTokens',
        args: [],
      })
    } catch (error) {
      console.log(error);
    }


  }

  const handleClaim = async () => {
    console.log("INSIDE HANDLE CLAIM PART 1=====================", !lastClaimed)
    await handleInitialClaim()

    if (lastClaimed) {

      const now = new Date()
      const nextClaimTime = new Date(lastClaimed)
      nextClaimTime.setHours(nextClaimTime.getHours() + 24)
      if (now < nextClaimTime) return
    }

    setLastClaimed(new Date())
    setClaimable(0)

    // In a real app, you would call a contract or API here
    setTimeout(() => {
      setClaimable(100)
    }, 5000) // Simulate reset for demo purposes
  }

  return (
    <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-amber-800">
          <Coins className="h-5 w-5 text-amber-500" />
          Daily YH Token
        </CardTitle>
        <CardDescription>Claim your daily YH tokens to boost your investments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Available to claim</div>
            <div className="text-2xl font-bold text-amber-600">{claimable} YH</div>
          </div>
          <Button
            onClick={handleClaim}
            disabled={getTimeUntilNextClaim() !== "Claim now"}
            className="bg-amber-500 hover:bg-amber-600"
          >
            {getTimeUntilNextClaim() === "Claim now" ? "Claim Now" : getTimeUntilNextClaim()}
          </Button>
        </div>
        <div className="mt-4 space-y-1">
          <div className="flex justify-between text-xs">
            <span>Claim Progress</span>
            <span>{Math.round(getProgressValue())}%</span>
          </div>
          <Progress value={getProgressValue()} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

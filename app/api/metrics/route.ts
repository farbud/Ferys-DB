import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    activeUsers: 12840,
    avgResponse: 4.2,
    uptime: 98.9,
    alerts: 237,
  })
}
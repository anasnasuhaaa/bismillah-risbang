import Calculator from "@/components/Calculator"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-400 font-black text-center text-3xl">Simple Calculator</h1>
      <Calculator></Calculator>
      <Link
        href="https://github.com/anasnasuhaaa/bismillah-risbang"
        target="_blank">
        <p className="mt-5 text-center">Created by Anas Nasuha M0403251114</p>
      </Link>
    </div>
  )
}

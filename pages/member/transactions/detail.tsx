import SideBar from '@/components/organism/SideBar'
import TransactionDetailContent from '@/components/organism/TransactionDetailContent'
import React from 'react'

export default function Detail() {
  return (
    <>
    <section className="transactions-detail overflow-auto">
        {/* Sidebar Here */}
        <SideBar activeMenu='transactions' />
        <TransactionDetailContent />
    </section>
    </>
  )
}

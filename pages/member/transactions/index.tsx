import SideBar from "@/components/organism/SideBar";
import TransactionContent from "@/components/organism/TransactionContent";

export default function Transactions() {
  return (
    <>
    <section className="transactions overflow-auto">
        {/* Sidebar Here */}
        <SideBar activeMenu="transactions" />
        <TransactionContent />
    </section>
    </>
  )
}

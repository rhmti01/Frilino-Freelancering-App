import React from "react";
import Table from "../../ui/Table";
import ProposalTableRow from "./ProposalTableRow";

function ProposalTable({ proposals }) {
  if (!proposals.length) {
    return (
      <div className=" mt-20 w-full flex items-center flex-col  ">
        <p className="  text-[22px] font-semibold text-secondary-800 dark:text-secondary-300 ">
          هنوز برای این پروژه درخواستی ثبت نشده است!
        </p>
        <img
          className=" md:size-[400px] xl:size-[500px] "
          src="/assets/images/proposal-empty.png"
          alt="empty proposal"
        />
      </div>
    );
  }

  return (
    <div className=" w-full justify-center flex mt-14 ">
      <Table>
        <Table.Header>
          <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tr-2xl">#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان پیشنهادی</th>
          <th>بودجه پیشنهادی </th>
          <th>تاریخ ثبت شده</th>
          <th>وضعیت</th>
          <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tl-2xl  ">تغییر وضعیت</th>
        </Table.Header>
        <Table.Body>
          {proposals?.map((proposal, index) => (
            <ProposalTableRow
              key={proposal._id}
              proposal={proposal}
              index={index}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalTable;

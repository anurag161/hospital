"use client";
import Header from "@/components/layout/Header";
import React, { useMemo } from "react";
import { useTable } from "react-table";

// Mock data
const data = [
  {
    id: 1,
    col1: "Data 1",
    col2: "Data 2",
    /* Add more columns */ status: "Active",
  },
  {
    id: 2,
    col1: "Data 3",
    col2: "Data 4",
    /* Add more columns */ status: "Inactive",
  },
  {
    id: 2,
    col1: "Data 3",
    col2: "Data 4",
    /* Add more columns */ status: "Inactive",
  },
  {
    id: 2,
    col1: "Data 3",
    col2: "Data 4",
    /* Add more columns */ status: "Inactive",
  },
  {
    id: 2,
    col1: "Data 3",
    col2: "Data 4",
    /* Add more columns */ status: "Inactive",
  },
  // Add more rows as needed
];

export default function Table() {
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Column 1", accessor: "col1" },
      { Header: "Column 2", accessor: "col2" },
      { Header: "Column 3", accessor: "col3" },
      { Header: "Column 4", accessor: "col4" },
      { Header: "Column 5", accessor: "col5" },
      { Header: "Column 6", accessor: "col6" },
      { Header: "Column 6", accessor: "col7" },
      // Add more columns here
      { Header: "Status", accessor: "status", Cell: StatusCell },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <Header />
      <div className="overflow-x-auto pt-40">
        <table
          {...getTableProps()}
          className="w-full border-collapse border border-gray-800"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-gray-200"
              >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="px-4 py-2">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="border px-4 py-2">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

// Custom cell component for status column
const StatusCell = ({ value }) => {
  const handleChange = (e) => {
    console.log(`Status changed to: ${e.target.value}`);
    // Implement logic to update status
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="focus:outline-none"
    >
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  );
};

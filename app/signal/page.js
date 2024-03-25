"use client";

import PageLayout from "../components/Layout/PageLayout";
import { useRef, useEffect, useState, memo } from "react";
import { columns } from "@/app/signal/columns";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import ScrollToTopButton from "../components/ScrollToTopButton";
function Signal() {
  const container = useRef();

  const data = [
    {
      id: 1,
      logo: "/img/signal/hfm.png",
      proTrader: "Hot Forex Market",
      time: "1707990253",
      order: "BUY",
      symbol: "GBP/USD",
      price: "SL 1.024567 - TP 1.90945",
      outcome: true,
    },
    {
      id: 2,
      logo: "/img/signal/kfa.png",
      proTrader: "Kojo Forex Academy",
      time: "1707990253",
      order: "BUY",
      symbol: "GBP/USD",
      price: "SL 1.024567 - TP 1.90945",
      outcome: true,
    },
    {
      id: 3,
      logo: "/img/signal/mff.png",
      proTrader: "My Forex Fund",
      time: "1707990253",
      order: "BUY",
      symbol: "GBP/USD",
      price: "SL 1.024567 - TP 1.90945",
      outcome: false,
    },
    {
      id: 4,
      logo: "/img/signal/exness.png",
      proTrader: "Exness",
      time: "1707990253",
      order: "BUY",
      symbol: "GBP/USD",
      price: "SL 1.024567 - TP 1.90945",
      outcome: true,
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "FX:EURUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <PageLayout>
      <div>
        <p className="mt-10 mb-9">
          <span className="text-red-600 font-bold">Disclaimer:</span> Despite
          the meticulous nature of our trading analysis, it&lsquo;s imperative
          to understand that trading signals are not infallible, and their
          accuracy cannot be guaranteed at 100%. We explicitly absolve ourselves
          from any liability for losses incurred by users, emphasizing that the
          decision to act on signals is entirely at the owner&lsquo;s risk. This
          acknowledgment underscores the inherent unpredictability of financial
          markets, where past performance serves as a guide but does not assure
          future outcomes. Users are urged to exercise caution, recognizing the
          inherent uncertainties associated with trading decisions, and seek
          additional professional advice if needed.
        </p>
        <div
          className="tradingview-widget-container"
          ref={container}
          style={{ height: "70vh", width: "100%" }}
        >
          <div
            className="tradingview-widget-container__widget"
            style={{ height: "calc(100% - 32px)", width: "100%" }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-center py-14">
        <Input
          placeholder="Search Pro Trader"
          value={table.getColumn("proTrader")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("proTrader")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border border-blue-600"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <ScrollToTopButton />
    </PageLayout>
  );
}

export default memo(Signal);

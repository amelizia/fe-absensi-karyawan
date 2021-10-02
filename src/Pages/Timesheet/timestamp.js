import React, { useState, useMemo } from "react";
import TableHeader from "../../Components/DataTable/Header";
import Pagination from "../../Components/DataTable/Pagination";
import Search from "../../Components/DataTable/Search";

const TimeStamp = () => {
    const [date, setDate] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 50;

    const headers = [
        { name: "Date", field: "id", sortable: false },
        { name: "Start Time", field: "start", sortable: true },
        { name: "Finish Time", field: "finish", sortable: true },
        { name: "Working Time", field: "duration", sortable: false },
        { name: "Status", field: "status", sortable: false}
    ];

    const dateData = useMemo(() => {
        let computedDate = date;

        if (search) {
            computedDate = computedDate.filter(
                date =>
                    date.start.toLowerCase().includes(search.toLowerCase()) ||
                    date.finish.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedDate.length);

        //Sorting date
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedDate = computedDate.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedDate.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [date, currentPage, search, sorting]);

    return (
        <>
            <div className="container mx-auto p-6 font-bold">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <div className="w-1/3">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="w-full items-center text-right flex-grow">
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                    <table className="w-full items-center text-center flex-grow">
                        <TableHeader
                            headers={headers}
                            onSorting={(field, order) =>
                                setSorting({ field, order })
                            }
                        />
                        <tbody>
                            {dateData.map(date => (
                                <tr>
                                    <th scope="w-full" key={date.id}>
                                        {date.id}
                                    </th>
                                    <td>{date.start}</td>
                                    <td>{date.finish}</td>
                                    <td>{date.duration}</td>
                                    <td>{date.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};


export default TimeStamp;
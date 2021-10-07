import React, { useState, useMemo } from "react";
import TableHeader from "../../Components/DataTable/Header";
import Pagination from "../../Components/DataTable/Pagination";
import Search from "../../Components/DataTable/Search";

const AttendStamp = () => {
    const [name, setName] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 50;

    const headers = [
        { name: "Employee Name", field: "id", sortable: false },
        { name: "Role", field: "start", sortable: true },
        { name: "Attendance", field: "finish", sortable: true },
        { name: "Percentage", field: "duration", sortable: false },
        { name: "Status", field: "status", sortable: false}
    ];

    const nameData = useMemo(() => {
        let computedName = name;

        if (search) {
            computedName = computedName.filter(
                name =>
                    name.attendance.toLowerCase().includes(search.toLowerCase()) ||
                    name.percentage.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedName.length);

        //Sorting Name
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedName = computedName.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedName.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [name, currentPage, search, sorting]);

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
                            {nameData.map(name => (
                                <tr>
                                    <th scope="w-full" key={name.id}>
                                        {name.id}
                                    </th>
                                    <td>{name.role}</td>
                                    <td>{name.attendance}</td>
                                    <td>{name.percentage}</td>
                                    <td>{name.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};


export default AttendStamp;
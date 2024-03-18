import { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";

export default function SgData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://study-ux-server.vercel.app/SGData")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching SGData:", error);
            });
    }, []);

    return (
        <div className="">
            <Header/>
            <div className="h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold mb-4">SG Data</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        First Name
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Last Name
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Mobile Number
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Course
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Study Plan
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Office
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        My Course
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Level
                                    </th>
                                    {/* Add more table headings as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {row.firstName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {row.lastName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {row.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {row.mobileNumber}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {row.course}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {row.studyPlan}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {row.office}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {row.myCourse}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {row.level}
                                        </td>
                                        {/* Add more table cells for additional fields */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

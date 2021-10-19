export default function Home() {
    return (
        <div className='py-10 px-1'>
            <div
                className='
                    relative 
                    overflow-auto scroll_custom
                '
            >
                <table className='w-full text-[14px]'>
                    <thead>
                        <tr>
                            <th
                                className='
                                    sticky left-0 bg-green-500 text-white px-[30px]
                                '
                            >
                                Name
                            </th>
                            <th className='bg-green-500 text-white'>ID</th>
                            <th className='bg-green-500 text-white'>Catelogry</th>
                            <th className='bg-green-500 text-white'>Quantily</th>
                            <th className='bg-green-500 text-white'>Price</th>
                            <th className='bg-green-500 text-white'>Position</th>
                            <th className='bg-green-500 text-white'>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                className='
                                    sticky left-0 px-[30px]
                                '
                            >
                                <span>Nguồn gốc nhân loại</span>
                            </td>
                            <td>123456</td>
                            <td>Động vật học</td>
                            <td>38</td>
                            <td>70.000</td>
                            <td>Ngoài - Dãy 1 - Thùng - Cột 2</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

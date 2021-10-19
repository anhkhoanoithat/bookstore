import { useForm } from 'react-hook-form'

export default function Home() {
    const { register, handleSubmit } = useForm()
    const onSubmit = ({ text }) => {
        console.log({ text })
    }
    return (
        <div className='py-10 px-1'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='
                    w-full text-center mb-8 mt-2
                '
            >
                <input
                    {...register('text', { required: true })}
                    type='search'
                    className='
                        w-[80%] max-w-[400px] p-3
                        border-[2px] border-green-400 
                        rounded-lg outline-none
                    '
                    placeholder='Enter text search... &#128540; &#128540; &#128540;'
                />
            </form>
            <div className='overflow-auto scroll_custom'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th
                                className='
                                    sticky left-0 bg-green-500 text-white px-[30px]
                                '
                            >
                                <span>Name</span>
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

import { useForm } from 'react-hook-form'
import data from '../utils/data'

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
                <table className='w-full text-sm'>
                    <thead>
                        <tr>
                            <th className='sticky'>
                                <div className='min-w-[200px] whitespace-pre-wrap text-left'>
                                    TÊN
                                </div>
                            </th>
                            <th>SL1</th>
                            <th>SL2</th>
                            <th>G</th>
                            <th>VT1</th>
                            <th>VT2</th>
                            <th>VT3</th>
                            <th>VT4</th>
                            <th>NOTE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => {
                            return (
                                <tr>
                                    <td className='sticky'>
                                        <div className='min-w-[200px]  whitespace-pre-wrap text-left'>
                                            {item.NAME}
                                        </div>
                                    </td>
                                    <td>{item.SL1 ? item.SL1 : ''}</td>
                                    <td>{item.SL2 ? item.SL2 : ''}</td>
                                    <td>{item.G ? item.G : ''}</td>
                                    <td>{item.VT1 ? item.VT1 : ''}</td>
                                    <td>{item.VT2 ? item.VT2 : ''}</td>
                                    <td>{item.VT3 ? item.VT3 : ''}</td>
                                    <td>{item.VT4 ? item.VT4 : ''}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

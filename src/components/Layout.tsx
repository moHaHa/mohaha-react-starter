import { FC } from 'react'
interface Layout {
}

const Layout : FC<Layout> = ({})=> {
    return (
        <>
        <div className='plg bg-[#eaeaea] '>
            <button>button</button>
            <h4>colors</h4>
            <ul>
                <li>
                    primary : <button className='bg-red p-8px'></button>
                </li>
                <li>
                    secondary : <button className='bg-teal p-8px'></button>
                </li>
                <li>
                    text color  : <button className='bg-black p-8px' ></button>
                </li>
                <li>
                    backgrounds : <button className='bg-gray p-8px'></button>
                </li>

            </ul>
        </div>
        </>
    )
}
export default Layout
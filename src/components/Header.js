import {ReactComponent as Leetcode} from './leetcode.svg';

const Header = () => {
    return (
        <header className="h-12 bg-slate-800 flex justify-between">
            <div className="">
                <a href='./'>
                    <Leetcode className='h-8 ml-6 mt-2 '/>
                </a>
            </div>
            <div className='item-center'>
                <button type='button' className='bg-red-100'>
                    tyep
                </button>
            </div>
        </header>
    )
}

export default Header;
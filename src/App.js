import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex flex-row h-screen w-screen bg-gradient-to-br from-gray-900 to-purple-900 ' >
      <div className='flex flex-col h-screen w-[50%] justify-center' >
        <label className='font-thin text-white text-8xl ml-10 ' >Welcome to <br/> CERO <label className='font-medium' > Protocol </label></label>
        <p className='font-thin text-white ml-10 text-4xl mt-3' >The only UnderCollateral Lending Platform that is truly free from Fiat</p>
        <a href='https://cero.vercel.app' target='_blank' ><button className='bg-white text-purple-900 w-fit h-fit px-4 py-2 rounded-xl ml-10 mt-10 text-2xl ' >Launch App</button></a>
      </div>  
      <div className='flex flex-col h-screen w-[50%] justify-center items-center' >
          <div className='w-[60%] h-fit bg-gray-900 p-6 rounded-2xl mt-10' >
              <label className='text-white font-normal text-2xl' >Gasless</label>
              <p className='text-white font-thin ' >You can startoff trading and borrow without having wallet balance previously</p>
          </div>
          <div className='w-[60%] h-fit bg-gray-900 p-6 rounded-2xl mt-10' >
              <label className='text-white font-normal text-2xl' >Fees</label>
              <p className='text-white font-thin ' >No upfront fees while borrowing assets, it automatically gets added to the principal having no interest, or deposit fees upfront so that it gets deducted from your fees pool, no more paying fees everytime</p>
          </div>
          <div className='w-[60%] h-fit bg-gray-900 p-6 rounded-2xl mt-10' >
              <label className='text-white font-normal text-2xl' >Borrowing</label>
              <p className='text-white font-thin ' >Get Loans having upto 0% collateral. Assets are locked until the full payment is payed or the gains become equivalent to borrow amount. Swapping within out platform is allowed.</p>
          </div>
      </div>
    </div>
  );
}

export default App;

import './styles/App.css'
import {Suspense,lazy, useState} from 'react'
import { Loader } from './components/Loader/Loader'


const SkipSelectPage = lazy(() => import('./pages/SkipSelectPage'))
const TopTab = lazy(() => import('./components/TopTab/TopTab'))
const SelectedSkipProvider = lazy(() => import('./contexts/SelectedSkipContext'))

function App() {
  const [activeTab, setActiveTab] = useState(3);
  return (
    <div className="relative">
      <Suspense fallback={<Loader></Loader>}>
        <SelectedSkipProvider>
          <div className='flex'>
            <div className=" pt-10 mx-auto px-10 xl:w-[70%]">
                <TopTab activeTab={activeTab} setActiveTab={setActiveTab}></TopTab>
                <SkipSelectPage></SkipSelectPage>
            </div>
            <div id="PanelPortal" className='shrink-0'></div>
          </div>
          
        </SelectedSkipProvider>
      </Suspense>
    </div>
  )
}

export default App

import Subnavbar from '../components/Subnavbar';
import '../styles/globals.css'
import GlobalHeader from './GlobalHeader';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <head />
      <body>
        <div className='fixed  top-0 z-40 w-full'>
          <GlobalHeader/>
          {/* <Subnavbar/> */}
        </div>
          {children}
      </body>
    </html>
  )
}

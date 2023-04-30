import './globals.css'
import Header from './Header.jsx'

export const metadata = {
  title: 'Todo app',
  description: 'This is a todo app',
}

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body>
      <Header/>
				{children}
			</body>
		</html>
	);
}

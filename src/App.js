import './App.css';
import { Route, Switch } from 'react-router-dom';
import FilteredByCost from './pages/filtered/filteredByCost';
import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pizza from './pages/pizza/pizza';
import Drink from './pages/drink/drink';
import Food from './pages/food/food';
import Cake from './pages/cake/cake';
import { useSelector } from 'react-redux';
import NewHeader from './components/newHeader/NewHeader';
import BottomHeader from './components/Bottom-Header/bottomHeader';
import ProductModal from './components/productModal/ProductModal';
import Caarousel from './components/carousel/Carousel';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	}
}));

function App() {
	const { foods } = useSelector((state) => state.cardData);

	console.log('stordan App ga kegan foods', foods);

	const classes = useStyles();

	return (
		<div className='App'>
			<NewHeader />
			<BottomHeader />
			<Caarousel />
			<ProductModal />
			<Switch>
				<Route path='/' exact render={(props) => <Pizza props={props} />} />

				<Route path='/drink' exact render={(props) => <Drink props={props} />} />

				<Route path='/food' exact render={(props) => <Food props={props} />} />

				<Route path='/cake' exact render={(props) => <Cake props={props} />} />

				<Route
					path='/filteredByCost/:id'
					render={(props) => {
						return <FilteredByCost props={props} data={foods} />;
					}}
				/>
			</Switch>
			{/* <ThemeComponenet /> */}
			{/* <CallBack /> */}
			{/* <ThemeProvider>
        <ChildComponent />
        <ParentComponent />
        <ToggleBtn />
      </ThemeProvider> */}
			{/* <Memo /> */}
			{/* <Suspense fallback={<h1>loading...</h1>} >
        <Card />
        <List />
      </Suspense> */}
			{/* <Footer/> */}
			{/* <Example/> */}
		</div>
	);
}

export default App;

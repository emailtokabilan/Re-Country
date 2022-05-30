import React from "react";
import './App.css';
import './index.css'
import { Grid, GridItem, Image, Heading, Stack, Button, Container, Center, Text, Input } from '@chakra-ui/react'


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			country: ''
		};
	}


	// componentWillMount() {
	// 	fetch("https://restcountries.com/v3.1/name/india")
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			this.setState({
	// 				items: json,
	// 				DataisLoaded: true
	// 			});
	// 		})
	// }
	searchApp = (e) => {
		e.preventDefault();
		var url = "https://restcountries.com/v3.1/name/" + this.state.country;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				console.log(this.state.country);
				this.setState({
					items: json
				});

			});
		return false;
	}
	afterSubmission(event) {
		event.preventDefault();
		this.searchApp();
	}

	render() {
		var { items } = this.state;


		return (


			<div>

				<Container maxW='1500px' h={700} p={20} centerContent bgGradient='linear(to-r, green.200, pink.500)' rounded={50} >

					<Center w="100%" color='white'>
						<Grid
							h='300px'
							w="100%"
							templateRows='repeat(2, 1fr)'
							templateColumns='repeat(5, 1fr)'
							gap={2} centerContent
						>

							<GridItem colSpan={6} h='100px' rounded={20} bgGradient={[
								'linear(to-tr, teal.300, yellow.400)',
								'linear(to-t, blue.200, teal.500)',
								'linear(to-b, orange.100, purple.300)',
							]}>
								<Center>
								<Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
									bgClip='text'
									fontSize='5xl'
									fontWeight='extrabold' >Country	{
									items.map((items) => (
										<Heading as='h4' size='xl' key={items.name}> {items.name.common}</Heading>
									))
								}
								</Heading>
								</Center>
							</GridItem>
							<GridItem h='400px' colSpan={1}>
								<div >

									<form onSubmit={this.searchApp}>
										<Stack color='teal.700'
											borderColor='orange.500'  _hover={{ bg: 'green.300' }} rounded={20}>
											<Input type="text" variant="filled" size='lg' rounded={20} name='search' height={50} onChange={(e) => { this.setState({ country: e.target.value }) }} placeholder='Search Country' value={this.state.country} >
											</Input>

											<Button colorScheme='teal' rounded={20} variant='solid' type="submit" className='btn' >Search</Button>
										</Stack>

									</form>
									<Center color='teal.700'
										borderColor='orange.500'>
										{
											items.map((items) => (
												<p key={items.name}>  Flag:<span className=" items-center w-50 h-100 bg-center mr-36 ml-36"><Image src={items.flags.png} /></span></p>
											))
										}
									</Center>
								</div>

							</GridItem>
							<GridItem colSpan={4} p={2} bgOpacity="25%">
								<div>
									<Center color='teal.700'
										borderColor='orange.500' h='80px' rounded={20} bgGradient={[
											'linear(to-tr, teal.300, yellow.400)',
											'linear(to-t, blue.200, teal.500)',
											'linear(to-b, orange.100, purple.300)',
										]}>
										<Heading>Country Details ⬇</Heading>
									</Center>
									<div>
										<Center>
											<Stack spacing={3} p={5}
												color='teal.700'
												borderColor='orange.500'  
												rounded='md'>
												<Text fontSize='22' p={2}>
													<ul>{
														items.map((items) => (
															<li key={items.name}>  Country:{items.name.official} </li>
														))
													}
													</ul>
													</Text>
													<Text fontSize='22' p={2}>
													<ul >{
														items.map((items) => (
															<li key={items.name}>  Maps:<a href={items.maps.googleMaps}>click</a></li>
														))
													}
													</ul>
													</Text>
													<Text fontSize='22' p={2}>
													<ul >{
														items.map((items) => (
															<li key={items.name}>  Population:{items.population} </li>
														))
													}
													</ul>
													</Text>
													<Text fontSize='22' p={2}>
													<ul >{
														items.map((items) => (
															<li key={items.name}>  Timezones:{items.timezones} </li>
														))
													}
													</ul>

												</Text>
											</Stack>
										</Center>
									</div>
								</div>
							</GridItem>

						</Grid>
					</Center>
				</Container>
			</div>
		)
	}
}

export default App;

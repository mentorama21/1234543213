import React from "react";
import theme from "theme";
import { Theme, Link, Image, Hr, Text, Button, Section, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/61094ca0697fab001ea43865/images/bg-2.jpg?v=2021-08-06T10:57:51.996Z) 0% 0% /cover repeat scroll padding-box" height="700px">
			<Image width="194px" height="64px" src="https://uploads.quarkly.io/61094ca0697fab001ea43865/images/logo.svg?v=2021-08-06T11:02:42.505Z" />
			<Hr />
			<Text color="#ffffff" font="600 2em --fontFamily-googleMontserrat">
				curso online de
			</Text>
			<Text color="#ffffff" font="600 5em --fontFamily-googleMontserrat">
				ux design do zero
			</Text>
			<Image
				width="256px"
				height="256px"
				display="block"
				justify-content="flex-end"
				align-items="center"
				src="https://uploads.quarkly.io/61094ca0697fab001ea43865/images/ux-02-2.png?v=2021-08-06T11:19:46.246Z"
				align-self="flex-end"
			/>
			<Hr />
			<Text color="#ffffff" font="600 0.8em/150% --fontFamily-googleMontserrat" display="inline-block" width="542px">
				mergulhe na profissão de UX designer e dê os primeiros passos com mentores estabelecidos no mercado. Faça um projeto de conclusão de curso para um grande cliente.
			</Text>
			<Hr />
			<Button
				width="207px"
				height="64px"
				background="--color-primary linear-gradient(49deg,#FB9C45 0%,#FF547E 100%)"
				border-radius="16px"
				color="#000000"
				font="normal 600 14px/1.5 --fontFamily-googleMontserrat"
			>
				COMPRE AGORA
			</Button>
			<Hr />
		</Section>
		<Section height="400px" lg-height="600px">
			<Section
				padding="60px 0"
				sm-padding="40px 0"
				min-height="600px"
				sm-min-height="auto"
				background="--color-light"
				display="flex"
				flex-direction="column"
				lg-background="#ffffff"
				lg-height="300px"
				lg-min-height="300px"
			>
				<Stack margin-top="auto" color="--grey" font="--base">
					<StackItem
						width="25%"
						md-width="50%"
						sm-width="100%"
						lg-color="#000000"
						lg-font="normal 15px/23px --fontFamily-googleMontserrat"
					>
						<Text margin="0px" lg-font="normal normal 600 26px/36px Montserrat, sans-serif">
							13 módulos
						</Text>
					</StackItem>
					<StackItem
						width="25%"
						md-width="50%"
						sm-width="100%"
						lg-color="#000000"
						lg-font="normal 15px/23px --fontFamily-googleMontserrat"
					>
						<Text margin="0px" lg-font="normal normal 600 26px/36px Montserrat, sans-serif">
							4 meses
						</Text>
					</StackItem>
					<StackItem
						width="25%"
						md-width="50%"
						sm-width="100%"
						lg-color="#000000"
						lg-font="normal 15px/23px --fontFamily-googleMontserrat"
					>
						<Text margin="0px" lg-font="normal normal 600 26px/36px Montserrat, sans-serif">
							projeto de conclusão
						</Text>
					</StackItem>
					<StackItem
						width="25%"
						md-width="50%"
						sm-width="100%"
						lg-color="#000000"
						lg-font="normal 15px/23px --fontFamily-googleMontserrat"
					>
						<Text margin="0px" lg-font="normal normal 600 26px/36px Montserrat, sans-serif">
							um mentor
						</Text>
					</StackItem>
				</Stack>
				<Stack margin-top="auto" color="--grey" font="--base">
					<StackItem
						width="25%"
						md-width="50%"
						sm-width="100%"
						lg-color="#000000"
						lg-font="normal 15px/23px --fontFamily-googleMontserrat"
					>
						<Text margin="0px">
							de material exclusivo sobre UX design
						</Text>
					</StackItem>
					<StackItem
						width="25%"
						md-width="50%"
						sm-width="100%"
						lg-color="#000000"
						lg-font="normal 15px/23px --fontFamily-googleMontserrat"
					>
						<Text margin="0px">
							de aprendizagem na prática
						</Text>
					</StackItem>
					<StackItem
						width="25%"
						md-width="50%"
						sm-width="100%"
						lg-color="#000000"
						lg-font="normal 15px/23px --fontFamily-googleMontserrat"
					>
						<Text margin="0px">
							para um cliente real
						</Text>
					</StackItem>
					<StackItem
						width="25%"
						md-width="50%"
						sm-width="100%"
						lg-color="#000000"
						lg-font="normal 15px/23px --fontFamily-googleMontserrat"
					>
						<Text margin="0px">
							expert da área
						</Text>
					</StackItem>
				</Stack>
			</Section>
			<Input />
			<Input />
			<Input />
			<Button>
				Button
			</Button>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61094ca0697fab001ea43863"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
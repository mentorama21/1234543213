import React from "react";
import theme from "theme";
import { Theme, Link, Image, Hr, Text, Button, Section, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
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
		<Section height="400px" lg-height="900px">
			<Input />
			<Input />
			<Input />
			<Button>
				Button
			</Button>
			<Components.QuarklycommunityKitFormspree />
		</Section>
		<Components.QuarklycommunityKitFormspree />
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
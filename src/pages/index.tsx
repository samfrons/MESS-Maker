import React from 'react'
import cx from 'classnames'
import styles from './index.module.css'

import { MultiSelect, Slider } from '@mantine/core'
import { Line, Bar } from '@ant-design/charts'
import { Timeline } from 'antd'

interface Props {
	className?: string
}

const Index = ({ className = '' }: Props) => {
	return (
		<div className={styles.root}>
			<MultiSelect
				data={[
					{ label: 'Energy generation', value: 'energy_generation' },
					{ label: 'Carbon capture', value: 'carbon_capture' }
				]}
				placeholder="Choose values..."
				label="Applications"
				className={styles.multiSelect}
			/>

			<span className={styles.text}>Parameters</span>

			<span className={styles.text1}>Production steps</span>

			<span className={styles.text2}>Performance profile</span>

			<span className={styles.text3}>Power output</span>

			<span className={styles.text4}>Predictions</span>

			<span className={styles.text5}>Model</span>

			<span className={styles.text6}>Price</span>

			<Slider
				marks={[
					{ label: '0', value: 0 },
					{ label: '5000', value: 50 },
					{ label: '10000', value: 100 }
				]}
				className={styles.slider}
			/>

			<MultiSelect
				data={[
					{ label: 'Cell', value: 'cell' },
					{ label: 'Bench top', value: 'benchtop' },
					{ label: 'Standing', value: 'standing' },
					{ label: 'Industrial', value: 'industrial' }
				]}
				variant="default"
				placeholder="Choose values..."
				label="Size"
				withAsterisk={false}
				className={styles.multiSelect1}
			/>

			<Line
				xField="year"
				data={[
					{ year: '1', value: 3 },
					{ year: '2', value: 4 },
					{ year: '3', value: 3.5 },
					{ year: '4', value: 5 },
					{ year: '5', value: 4.9 },
					{ year: '6', value: 6 },
					{ year: '7', value: 7 },
					{ year: '8', value: 9 },
					{ year: '9', value: 13 }
				]}
				yField="value"
				tooltip={{ showMarkers: false }}
				label={{}}
				state={{
					active: {
						style: { shadowBlur: 4, fill: 'red', stroke: '#000' }
					}
				}}
				point={{
					size: 5,
					shape: 'diamond',
					style: { fill: 'white', stroke: '#5B8FF9', lineWidth: 2 }
				}}
				interactions={[{ type: 'marker-active' }]}
				className={styles.line}
			/>

			<Slider defaultValue={30} className={styles.slider1} />

			<Bar
				xField="value"
				data={[
					{ year: 'Fuel Cell Efficiency', value: 38 },
					{ year: 'Coulombic Efficiency', value: 52 },
					{ year: 'Power Density', value: 61 },
					{ year: 'Voltage', value: 145 },
					{ year: 'Current', value: 48 }
				]}
				legend={{ position: 'top-left' }}
				yField="year"
				seriesField="year"
				className={styles.bar}
			/>

			<div className={styles.screenshot20230922At124757Pm} />

			<Timeline
				items={[
					{ children: 'Create a services site 2015-09-01' },
					{ children: 'Solve initial network problems 2015-09-01' },
					{ children: 'Technical testing 2015-09-01' },
					{ children: 'Network problems being solved 2015-09-01' }
				]}
				className={styles.timeline}
			>
				<span className={styles.text7}>I am Tag!</span>
			</Timeline>
		</div>
	)
}

export default Index
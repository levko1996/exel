/* eslint-disable space-before-blocks */
/* eslint-disable no-unused-vars */
import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.tamplate'
import {resizeHandler} from '@/components/table/table.resize'
import {shouldResize} from '@/components/table/table.functions'

export class Table extends ExcelComponent {
	static className = 'excel__table'

	constructor($root) {
		super($root, {
			listeners: ['mousedown']
		})
	}

	toHTML() {
		return createTable()
	}


	onMousedown(event) {
		if (shouldResize(event)) {
			resizeHandler(this.$root, event)
		}
	}
}

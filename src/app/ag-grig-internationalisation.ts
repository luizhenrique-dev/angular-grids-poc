import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AgGrigInternationalisation {

	constructor() {
	}

	localeText = {
		// for filter panel
		page: 'Pagina',
		more: 'Mais',
		to: 'de',
		of: 'ate',
		next: 'Proximo',
		last: 'Ultimo',
		first: 'Primeiro',
		previous: 'Anterior',
		loadingOoo: 'Carregando...',

		// for set filter
		selectAll: 'Selecionar todos',
		searchOoo: 'Buscando...',
		blanks: 'Vazio',

		// for number filter and text filter
		filterOoo: 'Filtrando...',
		applyFilter: 'Aplicando filtro...',
		equals: 'Igual',
		notEqual: 'Diferente',

		// for number filter
		lessThan: 'Menor',
		greaterThan: 'Maior',
		lessThanOrEqual: 'Menor ou igual',
		greaterThanOrEqual: 'Maior ou igual',
		inRange: 'Entre',

		// for text filter
		contains: 'Contem',
		notContains: 'Nao contem',
		startsWith: 'Começa com',
		endsWith: 'Termina com',

		// filter conditions
		andCondition: 'E',
		orCondition: 'Ou',

		// the header of the default group column
		group: 'Grupo',

		// tool panel
		columns: 'Colunas',
		filters: 'Filtros',
		rowGroupColumns: 'Pivot',
		rowGroupColumnsEmptyMessage: 'Grupo de colunas vazias',
		valueColumns: 'Valores de coluna',
		pivotMode: 'Pivot mode',
		groups: 'Grupos',
		values: 'Valores',
		pivots: 'Pivots',
		valueColumnsEmptyMessage: 'Grupo de linhas vazias',
		pivotColumnsEmptyMessage: 'Grupo de vazios vazias',
		toolPanelButton: 'la tool panel',

		// other
		noRowsToShow: 'Nenhuma registro para ser exibido',

		// enterprise menu
		pinColumn: 'Fixar coluna',
		valueAggregation: 'Valor de agregaçao',
		autosizeThiscolumn: 'Auto ajustar esta coluna',
		autosizeAllColumns: 'Auto ajustar colunas',
		groupBy: 'Agrupar por',
		ungroupBy: 'Desagrupar por',
		resetColumns: 'Reset colunas',
		expandAll: 'Expandir todos',
		collapseAll: 'Diminuir todos',
		toolPanel: 'Painel de ferramentas',
		export: 'Exportar',
		csvExport: 'Exportar CSV',
		excelExport: 'Exportar Excel (.xlsx)',
		excelXmlExport: 'Exportar Excel (.xml)',

		// enterprise menu (charts)
		pivotChartAndPivotMode: 'Graficos & Pivot Mode',
		pivotChart: 'Pivot graficos',
		chartRange: 'Alcance do grafico',

		columnChart: 'Grafico da coluna',
		groupedColumn: 'Agrupar coluna',
		stackedColumn: 'Empilhar coluna',
		normalizedColumn: 'Normalizar coluna',

		barChart: 'Grafico de barras',
		groupedBar: 'Barras agrupadas',
		stackedBar: 'Barras empilhadas',
		normalizedBar: 'Barras normalizadas',

		pieChart: 'Grafico de pizza',
		pie: 'Pizza',
		doughnut: 'Grafico de rosquinha',

		line: 'Linha',

		xyChart: 'X Y (Dispersão)',
		scatter: 'Dispersão',
		bubble: 'Bolha',

		areaChart: 'Grafico de área',
		area: 'Área',
		stackedArea: 'Área empilhada',
		normalizedArea: 'Normalizar empilhada',

		// enterprise menu pinning
		pinLeft: 'Esquerda',
		pinRight: 'Direita',
		noPin: 'Nenhum',

		// enterprise menu aggregation and status bar
		sum: 'Soma',
		min: 'Min',
		max: 'Max',
		none: 'Nenhum',
		count: 'Contagem',
		average: 'Media',
		filteredRows: 'Filtrado',
		selectedRows: 'Selecionado',
		totalRows: 'Total de linhas',
		totalAndFilteredRows: 'Total de linhas filtradas',

		// standard menu
		copy: 'Copiar',
		copyWithHeaders: 'Copiar com cabeçalhos',
		ctrlC: 'ctrl n C',
		paste: 'Colar',
		ctrlV: 'ctrl n V',

		// charts
		pivotChartTitle: 'Grafico de Pivot',
		rangeChartTitle: 'Grafico de alcance',
		settings: 'Configuraçoes',
		data: 'Dados',
		format: 'Formatar',
		categories: 'Categorias',
		series: 'Series',
		axis: 'Eixo',
		color: 'Cor',
		thickness: 'Espessura',
		xRotation: 'Rotaçao X',
		yRotation: 'Rotacao Y',
		ticks: 'Minuto',
		width: 'Largura',
		length: 'Comprimento',
		padding: 'Preenchimento',
		chart: 'Grafico',
		title: 'Titulo',
		font: 'Fonte',
		top: 'Top',
		right: 'Direita',
		bottom: 'Baixo',
		left: 'Esquerda',
		labels: 'Rotulos',
		size: 'Tamanho',
		legend: 'Legenda',
		position: 'Posiçao',
		markerSize: 'Tamanho da marcaçao',
		markerStroke: 'Marcador Stroke',
		markerPadding: 'Marcador do preenchimento',
		itemPaddingX: 'Preenchimento do item X',
		itemPaddingY: 'Preenchimento do item Y',
		strokeWidth: 'Stroke Largura',
		offset: 'Deslocamento',
		tooltips: 'Baloes',
		offsets: 'Compensações',
		callout: 'Chamar',
		markers: 'Marcador',
		shadow: 'Sombra',
		blur: 'Borrão',
		xOffset: 'Deslocamento X',
		yOffset: 'Deslocamento Y',
		lineWidth: 'Largura da linha',
		normal: 'Normal',
		bold: 'Negrito',
		italic: 'Italico',
		boldItalic: 'Negrito italico',
		fillOpacity: 'Preencher opacidade',
		strokeOpacity: 'Opacidade da linha',
		columnGroup: 'Coluna',
		barGroup: 'Barra',
		pieGroup: 'Pizza',
		lineGroup: 'Linha',
		scatterGroup: 'Dispersão',
		areaGroup: 'Área',
		groupedColumnTooltip: 'Agrupado',
		stackedColumnTooltip: 'Empilhada',
		normalizedColumnTooltip: '100% Empilhada',
		groupedBarTooltip: 'Agrupado',
		stackedBarTooltip: 'Empilhada',
		normalizedBarTooltip: '100% Empilhada',
		pieTooltip: 'Pizza',
		doughnutTooltip: 'Rosquinha',
		lineTooltip: 'Linha',
		groupedAreaTooltip: 'Agrupado',
		stackedAreaTooltip: 'Empilhada',
		normalizedAreaTooltip: '100% Empilhada',
		scatterTooltip: 'Dispersão',
		bubbleTooltip: 'Bolha',
		noDataToChart: 'Nao existem dados para exibir o grafico.',
		pivotChartRequiresPivotMode: 'O gráfico dinâmico requer o modo dinâmico ativado.'
	};
}

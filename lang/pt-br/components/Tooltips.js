export default {
  header: 'Tooltip',
  headerText: 'O componente `v-tooltip` é útil para transmitir informações quando um usuário paira o mouse sobre um elemento. Você também pode controlar a exibição das tooltips programaticamente utilizando o **v-model**',
  components: ['v-tooltip'],
  examples: [{
    default: {
      header: 'Padrão',
      desc: 'Tooltips podem envolver qualquer elemento.'
    },
    alignment: {
      header: 'Alinhamento',
      desc: 'Uma tooltip pode ser alinhada em qualquer um dos quatro lados do elemento que fará sua ativação'
    },
    visibility: {
      header: 'Visibilidade',
      desc: 'A visibilidade de uma tooltip pode ser mudada programaticamente usando o `v-model`.'
    }
  }],
  props: {
    closeDelay: 'Atraso (em ms) depois do menu fechar (quando a prop open-on-hover está definida como verdadeira)',
    debounce: 'Duração antes da tooltip ser mostrada e escondida quando estiver com o mouse pairado sobre',
    openDelay: 'Atraso (em ms) depois do menu abrir (quando a prop open-on-hover está definida como verdadeira)'
  }
}

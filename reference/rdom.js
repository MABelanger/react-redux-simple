var div = React.DOM.div;
var h1 = React.DOM.h1;

var myTitle = React.createClass({
  render : function () {
    return (
      div(null,
        h1( {style: {color: this.props.color}} , this.props.title),
        React.DOM.div( {style: {color: 'red', fontWeight: 'bold'} } , 'My Title')
      )
    )
  }
});

var myTitleFactory = React.createFactory(myTitle)

var myFirstComponent = React.createClass({
  render: function() {
    return (
      div(null,
        myTitleFactory({title: 'props are the best', color: 'peru'}),
        myTitleFactory({title: 'props are the best', color: 'red'}),
        myTitleFactory({title: 'props are the best', color: 'black'})
      )
    )
  }
});


ReactDOM.render(
  React.createElement(myFirstComponent),
  document.getElementById('app')
)

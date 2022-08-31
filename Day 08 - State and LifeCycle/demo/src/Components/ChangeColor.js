import React from 'react';
 class ChangeColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black'
        }
    }
componentDidMount() {
    setTimeout(() => {
        this.setState({ color: 'pink' });
      }, 5000);
}    
render() {
    return (
        <div>
            <div style={{backgroundColor: this.state.color,
            paddingTop: 10,
            width: '100%',
            height: 80,
            margin: 'auto'
            }}>
            </div>
        </div>
    )
}
 }
 export default ChangeColor
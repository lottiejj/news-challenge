import React from 'react'

class Headlines extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headlines: []
        }
    }
    componentDidMount() {
        fetch(`https://content.guardianapis.com/search?order-by=newest&show-elements=image&show-fields=thumbnail%2Cheadline&page-size=10&api-key=b8dfa67b-3bff-4c8e-8baf-2d2cc7e0e0d7`) //sets max page size to 10 and indicates which fields to use
        .then(response => {
            return response.json();  //fetches api data and returns response
        })
        .then(data => {
            
            let array1 = []  // creates arrays to store title and image data
            let array2 = []
           
            for (var i = 0; i < data.response.results.length; i++) {
                array1.push(data.response.results[i].webTitle)  //pushes title into array
                array2.push(data.response.results[i].fields.thumbnail) //pushes thumbnail into array
             
            }

            this.setState({
                headlines: array1, 
                thumbnails: array2
               
            })
        });
}
    render(){
        let items = [] //render information in the array
        for(let i =0; i < this.state.headlines.length;i++){ 
            items.push(<h1>{this.state.headlines[i]}</h1>) // pushes into page itself
            items.push(<img id={`thumbnail ${i}`} src={this.state.thumbnails[i]} alt=""></img>)
        }

        return (
            
            <div>       
                {items}   
            </div>
            
        )// returns items now in the items array - headlines and thumbnails
    }
}

export default Headlines
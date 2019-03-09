import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { Table } from 'reactstrap';
import Player from './addUpdate'
class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: [],
            modal: false,
            updatData:{},
            isUpdate:false,
            pid:0,
            name: "",
            lname:"",
            score: "",
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    addPlayer = () => {
         let { pid } = this.state;
         let i=parseInt(pid)+1
         let obj = {
                    id:i,
                    name: this.state.name,
                    lname: this.state.lname,
                    score: this.state.score,
                }
       
        this.setState({
            player: [obj, ...this.state.player],
            pid:i
        }) 
        console.log(i)
        this.toggle()
       
    }
    onDelete = (data) => {
        let c = window.confirm('Are you Sure ?');
        if (c) {
            const newState = this.state.player.filter((val) => val.name !== data.name );
            this.setState({
                player:newState
            }) 
        }
    }
    onUpdate=()=>{
        let obj = {
            id:this.state.updatData.id,
            name: this.state.name,
            lname: this.state.lname,
            score: this.state.score,
        }
 
        var newState= this.state.player.map(item => {
             return item.id === this.state.updatData.id ? obj : item;
         })
         this.setState({
            player:newState,
           
        })  
        this.toggle()
    }
    sortData=()=> {
        let  play = this.state.player;
        play.sort((a, b) => {
            if(a.score===b.score)
                return (a.lname > b.lname)?-1:1
            else
                return (a.score-b.score)
            }).reverse()
        this.setState({ player:play })
        
    }
    openModel=()=>{
        this.setState({
            modal:!this.state.modal,   
        })
    }
    updateModel=(data)=>{
        this.setState({
            modal:!this.state.modal,
            updatData:data,
            isUpdate:true
        })
    }
    render() {
        
        return (
            <div className="container">
                <div className="content">
                    <Card>
                        <CardBody>
                                <Button color="danger" onClick={this.openModel } >Add Player</Button>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th> Name</th>
                                        <th onClick={this.sortData}>Score &uarr;</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.player.length > 0 &&
                                        this.state.player.map((data, i) => {
                                            return <tr key={i}>
                                                <td>{data.name},{data.lname}</td>
                                                <td>{data.score}</td>
                                                <td><Button color="danger" onClick={() => this.onDelete(data)}
                                                >Delete</Button></td>
                                                <td><Button color="danger" onClick={()=>this.updateModel(data)} >Update Player</Button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                                <Player open={this.state.modal} toggle={this.toggle} addPlayer={this.addPlayer} data={this.state.updatData} 
                                isUpdate={this.state.isUpdate} handleChange={this.handleChange} updatePlayer={this.onUpdate} id={this.state.pid} />
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Show;
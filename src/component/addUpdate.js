import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class Player extends React.Component {
    constructor(props) {
        super(props);
    
    }
    render() {
        return (
                <Modal isOpen={this.props.open} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup >
                                <Label for="exampleEmail" >Name</Label>
                                <Input type="text" name="name" defaultValue={this.props.data.name} id="exampleEmail" onChange={this.props.handleChange} />
                            </FormGroup>
                            <FormGroup >
                                <Label for="exampleEmail" >Last Name</Label>
                                <Input type="text" name="lname" id="exampleEmail" defaultValue={this.props.data.lname} onChange={this.props.handleChange} />
                            </FormGroup>
                            <FormGroup >
                                <Label for="exampleEmail" >Score</Label>
                                <Input type="number" name="score" id="exampleEmail" defaultValue={this.props.data.score} onChange={this.props.handleChange} min={0} max={100} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {this.props.isUpdate ?<Button color="primary" onClick={this.props.updatePlayer}>Update</Button> :<Button color="primary" onClick={this.props.addPlayer}>Add </Button>}
                        
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
           
        );
    }
}

export default Player;
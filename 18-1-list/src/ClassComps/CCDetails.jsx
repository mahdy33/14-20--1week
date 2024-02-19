import React, { Component } from 'react';
import CCAddToList from './CCAddToList';
import CCDetailsList from './CCDetailsList';

export default class CCDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            editIndex: null,
            editGrade: '',
            editName: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleAddData = () => {
        const { Grade, Name, dataList } = this.state;

        if (Grade && Name) {
            const newData = { Grade, Name };
            this.setState({
                dataList: [...dataList, newData],
                Grade: "",
                Name: "",
            });
        }
    }

    handleRemoveData = (index) => {
        const { dataList } = this.state;
        const updatedDataList = [...dataList];
        updatedDataList.splice(index, 1);

        this.setState({
            dataList: updatedDataList,
        });
    }

    handleEditClick = (index) => {
        const { dataList } = this.state;
        const editData = dataList[index];
        this.setState({
            editIndex: index,
            editGrade: editData.Grade,
            editName: editData.Name
        });
    }

    handleSaveClick = () => {
        const { editIndex, editGrade, editName, dataList } = this.state;
        const updatedDataList = [...dataList];
        updatedDataList[editIndex] = { Grade: editGrade, Name: editName };
        this.setState({
            dataList: updatedDataList,
            editIndex: null,
            editGrade: '',
            editName: ''
        });
    }

    handleCancelClick = () => {
        this.setState({
            editIndex: null,
            editGrade: '',
            editName: ''
        });
    }

    render() {
        const { dataList, editIndex, editGrade, editName } = this.state;

        return (
            <div className="CCDetails">
                <CCAddToList
                    Grade={this.state.Grade}
                    Name={this.state.Name}
                    handleInputChange={this.handleInputChange}
                    handleAddData={this.handleAddData}
                />
                <br />
                <CCDetailsList
                    dataList={dataList}
                    handleRemoveData={this.handleRemoveData}
                    handleEditClick={this.handleEditClick}
                />
                {editIndex !== null && (
                    <div>
                        <input type="text" value={editGrade} onChange={(e) => this.setState({ editGrade: e.target.value })} />
                        <input type="text" value={editName} onChange={(e) => this.setState({ editName: e.target.value })} />
                        <button onClick={this.handleSaveClick}>Save</button>
                        <button onClick={this.handleCancelClick}>Cancel</button>
                    </div>
                )}
            </div>
        );
    }
}

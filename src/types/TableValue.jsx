var React = require('../react'),
    FieldValueMixin = require('../FieldValueMixin');

exports = module.exports = React.createClass({

    displayName: 'TableValue',

    mixins: [FieldValueMixin],

    getInitialState: function() {
        return {
            isEditing: false
        }
    },

    toggleEditing: function(e) {
        this.setState({
            isEditing: !this.state.isEditing
        });
    },

    render: function() {
        return (
            <div>
                <input type="text" />
                <p style={{display: this.state.isEditing ? 'none' : 'block'}} >{this.state.value}</p>
                {this.props.children}
            </div>
        );
    }
});
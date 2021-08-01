import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { get_data, add_data, set_loading } from '../redux/actions/dataActions';

const Form = (props) => {
    const { get_data, add_data, set_loading, appData } = props;

    useEffect(() => {
        set_loading();
        get_data();
    }, []);

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    appData: state.data
});

export default connect(mapStateToProps, {get_data, add_data, set_loading})(Form);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { get_data, add_data, set_current } from '../redux/actions/dataActions';

const Form = (props) => {
    const { datass: { data, loading, current }, get_data, add_data, set_current } = props;
    const [firstname, setFirstname] = useState( current ? current[0].firstname : "hello");
    const [lastname, setLastname] = useState('there');

    useEffect(() => {
        if (current) {
            setFirstname(current[0].firstname)
            setLastname(current[0].lastname)
        }
    }, [current]);

    useEffect(() => {
        get_data();
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(firstname, lastname);
        const newData = { firstname, lastname };
        add_data(newData);
    };

    const seleting = (e) => {
        const id = e.target.id;
        set_current(id);
    };

    if (loading || data === undefined) {
        return (<div>Loading...</div>)
    }

    return (
        <div>
            <form>
                <label htmlFor="firstname">First Name: </label>
                <input
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="lastname">Last Name: </label>
                <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange = {e => setLastname(e.target.value)}
                />
                <br />
                <br />
                <input type="submit" value="submit" onClick={submit} />
            </form>

            <br />
            <div>
                <div className="dats">
                    {data.map((dt) => {
                        return (
                            <div key={dt.id} onClick={seleting} className="data-item" id={dt.id} value={dt.id}>
                                {dt.firstname}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    datass: state.datas
});

export default connect(mapStateToProps, {get_data, add_data, set_current})(Form);

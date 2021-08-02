import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { get_data, add_data } from '../redux/actions/dataActions';

const Form = (props) => {
    const { datass: { data, loading }, get_data, add_data } = props;
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    useEffect(() => {
        get_data();
        //eslint-disable-next-line
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(firstname, lastname);
        const newData = { firstname, lastname };
        add_data(newData);
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
                <select>
                    {data.map((dt) => {
                        return (
                            <option key={dt.id}>{ dt.firstname }</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    datass: state.datas
});

export default connect(mapStateToProps, {get_data, add_data})(Form);

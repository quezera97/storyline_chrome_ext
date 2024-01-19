import {useState} from 'react';
import Background from '../components/Background.js';
import ProfilePicture from '../components/ProfilePicture.js';
import TitleText from '../components/Text.js';
import BreakLine from '../components/BreakLine.js';
import InputText from '../components/InputText.js';
import '../App.css';
import { FaEdit } from 'react-icons/fa';
import ClickableIcon from '../components/ClickableIcon.js';
import EerieButton from '../components/EeerieButton.js';

function Profile() {

    const [username, setUsername] = useState('Click Icon To Edit Username');
    const [shortBio, setShortBio] = useState('Click Icon To Edit Short Bio');
    const [editingField, setEditingField] = useState(null);

    const handleEdit = (field) => {
        if (field === 'username') {
            setUsername(username);
        } else if (field === 'shortBio') {
            setShortBio(shortBio);
        }
        
        setEditingField(field);
    };  

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (editingField === 'username') {
            setUsername(value);
        } else if (editingField === 'shortBio') {
            setShortBio(value);
        }
    };

    const handleSave = () => {
        setEditingField(null);
    };

    return (
        <Background backgroundImage={require('../assets/img/portfolio_background.jpg')}>
            <BreakLine quantity={1}/>
            <ProfilePicture/>
            <BreakLine quantity={1}/>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {editingField === 'username' ? (
                    <>
                        <InputText
                            type="text"
                            value={username}
                            onChange={handleInputChange}
                            width={'30vw'}
                            maxlength={'20'}
                        />
                        <EerieButton onClick={handleSave} text={'SAVE'}/>
                    </>
                ) : (
                    <>
                        <TitleText
                            className="White-text Eerie-text Normal-text"
                            text={username}
                            style={{ marginRight: '10px' }}
                        />
                        <ClickableIcon
                            icon={<FaEdit />}
                            hasTooltip={true}
                            tooltipText="Edit Username"
                            className="custom-class"
                            style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }}
                            onClick={() => handleEdit('username')}
                        />
                    </>
                )}
            </div>
            <BreakLine quantity={1}/>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {editingField === 'shortBio' ? (
                    <>
                        <InputText
                            type="textarea"
                            value={shortBio}
                            onChange={handleInputChange}
                            height={'40vh'}
                            width={'30vw'}
                            maxlength={'250'}
                        />
                        <EerieButton onClick={handleSave} text={'SAVE'}/>
                    </>
                ) : (
                    <>
                       <TitleText
                            className="White-text Eerie-text Small-text"
                            text={shortBio}
                            style={{
                                marginRight: '10px',
                                border: '2px solid black',
                                padding: '10px',
                                width: '600px',
                            }}
                        />

                        <ClickableIcon
                            icon={<FaEdit />}
                            hasTooltip={true}
                            tooltipText="Edit Short Bio"
                            className="custom-class"
                            style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }}
                            onClick={() => handleEdit('shortBio')}
                        />
                    </>
                )}
            </div>
           
        </Background>
    );
}

export default Profile;
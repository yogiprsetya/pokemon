import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { setLocalStorage, getLocalStorage } from 'service/localStorage';

interface ISavePokemon {
  id: number;
  name: string;
  show: boolean;
  onClose(): any;
}

const SavePokemon = (props: ISavePokemon) => {
  const [nickname, setNickname] = useState<string>('');

  const save = () => {
    const dataExist = getLocalStorage('mypokemon') || [];

    const data = {
      id: props.id,
      nickname,
      originName: props.name,
    };

    setLocalStorage('mypokemon', [...dataExist, data]);
    props.onClose();
  };

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Catch Pokemon</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Gacha! Berikikan nama yang manis untuk Pokemon-mu.</p>

        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Nickname</Form.Label>
            <Form.Control onChange={(e) => setNickname(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='primary' disabled={!nickname} onClick={save}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SavePokemon;


import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { ModalContent, ModalTitle, BottomModal } from 'react-native-modals';
import TodoListAddForm from './TodoListAddForm';

const TodoListAdd = (props) => {
    return (
            <BottomModal 
                height={0.5}
                visible={props.visible}
                onTouchOutside={props.onClose}
                modalTitle={<ModalTitle title="Adding New Task" />}
            >
                <ModalContent>
                    <TodoListAddForm />
                </ModalContent>
            </BottomModal>
    )
}


const styles = StyleSheet.create({

});

export default TodoListAdd
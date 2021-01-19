import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import useFieldApi from '@data-driven-forms/react-form-renderer/dist/esm/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/dist/esm/use-form-api';
import { Skeleton, SkeletonSize } from '@redhat-cloud-services/frontend-components/components/cjs/Skeleton';
import * as api from '../api';
import './selectPlaybook.scss';
import {
    FormGroup,
    Grid, GridItem,
    Radio,
    FormSelect,
    FormSelectOption,
    Text,
    TextContent,
    TextInput,
    Stack, StackItem
} from '@patternfly/react-core';

const SelectPlaybook = (props) => {
    const { SelectPlaybookProps: { issues, systems } } = props;
    const { input } = useFieldApi(props);
    const formOptions = useFormApi();
    const [ existingRemediations, setExistingRemediations ] = useState([]);
    const [ existingPlaybookSelected, setExistingPlaybookSelected ] = useState(false);
    const [ newPlaybookName, setNewPlaybookName ] = useState('');
    const [ selectedPlaybook, setSelectedPlaybook ] = useState();
    const nameValid = true;

    useEffect(() => {
        async function fetchData() {
            const { data: existingRemediations } = await api.getRemediations();
            setExistingRemediations(existingRemediations);
        }

        fetchData();
    }, []);

    const pluralize = (count, str) => count > 1 ? str + 's' : str;

    return (
        <Stack hasGutter>
            <StackItem>
                <TextContent>
                    <Text>
                        You selected <b>{`${systems.length} ${pluralize(systems.length, 'system')}`} </b>
                        to remediate with Ansible, which in total includes <b>{`${issues.length} ${pluralize(issues.length, 'issue')}`} </b>
                        which can be remediated by Ansible.
                    </Text>
                </TextContent>
            </StackItem>
            <StackItem>
                <Grid hasGutter>
                    <GridItem sm={12} md={6} lg={4}>
                        <Radio
                            label={existingRemediations ? `Add to existing playbook (${existingRemediations.length})` : 'Add to existing playbook'}
                            aria-label="Add to existing playbook"
                            id="existing"
                            name="radio"
                            isDisabled={!existingRemediations || !existingRemediations.length}
                            defaultChecked={existingPlaybookSelected}
                            onChange={() => {
                                setExistingPlaybookSelected(true);
                                formOptions.change('existing-playbook-selected', true);
                                input.onChange(selectedPlaybook?.name || '');
                                formOptions.change('existing-playbook', selectedPlaybook);
                            }}
                        />
                    </GridItem>
                    <GridItem sm={12} md={6} lg={4}>
                        {
                            existingRemediations === false ?
                                <Skeleton size={SkeletonSize.lg} /> :
                                <FormSelect
                                    onChange={val => {
                                        api.getRemediation(val).then(remediation => {
                                            setSelectedPlaybook(remediation);
                                            existingPlaybookSelected && input.onChange(remediation.name);
                                            existingPlaybookSelected && formOptions.change('existing-playbook', remediation);
                                        });
                                    }}
                                    value={selectedPlaybook?.id || ''}
                                    aria-label="Select an existing playbook" >
                                    {existingRemediations.length
                                        ? [ <FormSelectOption key='select-playbook-placeholder' value='' label='Select playbook' isDisabled />,
                                            ...existingRemediations.map(({ id, name }) =>
                                                <FormSelectOption key={id} value={id} label={name} />)
                                        ]
                                        : <FormSelectOption key="empty" value="empty" label="No existing playbooks" />
                                    }
                                </FormSelect>
                        }
                    </GridItem>
                </Grid>
            </StackItem>
            <StackItem>
                <Grid hasGutter>
                    <GridItem sm={12} md={6} lg={4}>
                        <Radio
                            label="Create new playbook"
                            aria-label="Create new playbook"
                            id="new"
                            name="radio"
                            defaultChecked={!existingPlaybookSelected}
                            onChange={() => {
                                setExistingPlaybookSelected(false);
                                formOptions.change('existing-playbook-selected', false);
                                input.onChange(newPlaybookName);
                                formOptions.change('existing-playbook', undefined);
                            }}
                        />
                    </GridItem>
                    <GridItem sm={12} md={6} lg={4}>
                        <FormGroup
                            fieldId="remediation-name"
                            validated={nameValid ? 'default' : 'error'}
                        >
                            <TextInput
                                type="text"
                                value={newPlaybookName}
                                onChange={(val) => {
                                    setNewPlaybookName(val);
                                    existingPlaybookSelected || input.onChange(val);
                                }}
                                aria-label="Name your playbook"
                                autoFocus
                                validated={nameValid ? 'default' : 'error'}
                            />
                        </FormGroup>
                    </GridItem>
                </Grid>
            </StackItem>
        </Stack >
    );
};

SelectPlaybook.propTypes = {
    SelectPlaybookProps: propTypes.object,
    props: propTypes.object
};

export default SelectPlaybook;

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { usePostStore } from '../../store/postStore';
import EditPost from './EditPost';
import { vi } from 'vitest';
vi.mock('../../store/postStore');

describe('EditPost', () => {
it('renders the edit form', () => {
const history = createMemoryHistory();
const postId = '123';
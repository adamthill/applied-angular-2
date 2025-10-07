import { articlesHandlers } from './links-handler';
import { WELCOME_HANDLERS } from './welcome-handlers';

export const handlers = [...WELCOME_HANDLERS, ...articlesHandlers];

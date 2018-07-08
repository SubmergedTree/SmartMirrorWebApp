import restRequest from './rest'
import {FindMirrorActions} from './find-mirror-action'

export const findMirrorActions = new  FindMirrorActions(restRequest);
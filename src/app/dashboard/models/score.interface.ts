import { Score } from '../../games/models/score.interface';
export interface ScoreService extends Score{
    date: Date;
}
import {
  View
} from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardprops {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDay: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardprops;
}

export function DuoCard({ data }:Props){
  return (
    <View style={styles.container}>
      <DuoInfo 
        label="Name"
        value={data.name}
      />

      <DuoInfo 
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      />

      <DuoInfo 
        label="Disponibilidade"
        value={`${data.weekDay.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo 
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button}>
        
      </TouchableOpacity>
    </View>
  );
}
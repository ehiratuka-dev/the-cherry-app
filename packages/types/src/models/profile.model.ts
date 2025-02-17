import { Arquivo } from "./arquivo.model";
import { RECs } from "./recs.model";
import { RECs25 } from "./recs25.model";
import { SocialMedia } from "./social-media.model";

export interface Profile {
  id: string;
  nome: string;
  cidade?: string;
  instagram?: string;
  tags?: string[];
  nudometro?: number;

  bannerSrc?: string;
  iconSrc?: string;
  hidden?: boolean;
  bannered?: boolean;

  socialMedia?: SocialMedia;
  recs25?: RECs25[];
  recs?: RECs[];
  arquivos?: Arquivo[];
}

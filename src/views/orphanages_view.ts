import Orphanage from '../models/Orphanage';
import orphanageImagesView from './orphanage_images_view';

export default {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      orphanage_images: orphanageImagesView.renderMany(orphanage.orphanage_images),
    };
  },

  renderMany(orphanage: Orphanage[]) {
    return orphanage.map(orphanage => this.render(orphanage));
  }
}
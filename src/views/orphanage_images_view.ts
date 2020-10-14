import OrphanageImage from '../models/OrphanageImage';

export default {
  render(orphanageImage: OrphanageImage) {
    return {
      id: orphanageImage.id,
      url: `http://localhost:3333/uploads/${orphanageImage.path}`
    };
  },

  renderMany(orphanageImages: OrphanageImage[]) {
    return orphanageImages.map(image => this.render(image));
  }
};
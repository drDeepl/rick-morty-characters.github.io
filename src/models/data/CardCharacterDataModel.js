export class CardCharacterDataModel {
  static labels = {
    nameCharacter: 'character name',
    statusCharacter: 'status',
    species: 'species',
    lastKnownLocation: 'Last known location:',
    firstSeenIn: 'First seen in:'
  };
  constructor(characterDataResponse) {
    this.imgUrl = characterDataResponse.image;
    this.nameCharacter = characterDataResponse.name;
    this.statusCharacter = characterDataResponse.status;
    this.species = characterDataResponse.species;
    this.lastKnownLocation = characterDataResponse.location.name;
    this.firstSeenIn = characterDataResponse.episode[0];
    // this.episode = characterDataResponse.episode[0];
  }
  getLabel(propertyName) {
    return labels[propertyName];
  }
}

export default CardCharacterDataModel;

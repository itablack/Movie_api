#!/usr/bin/env node
//Ita mercy Movie theater

class Movie {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.availableCopies = availableCopies;
    }
  
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        return true;
      } else {
        console.log(`Sorry, "${this.title}" is currently out of stock.`);
        return false;
      }
    }
  
    returnMovie() {
      this.availableCopies++;
      console.log(`"${this.title}" has been returned.`);
    }
  }
  
  class Customer {
    constructor(name) {
      this.name = name;
      this.rentedMovies = [];
    }
  
    rentMovie(movie) {
      if (movie.rentMovie()) {
        this.rentedMovies.push(movie);
        console.log(`${this.name} has rented "${movie.title}".`);
      } else {
        console.log(`${this.name} couldn't rent "${movie.title}".`);
      }
    }
  
    returnMovie(movie) {
      const index = this.rentedMovies.indexOf(movie);
      if (index !== -1) {
        movie.returnMovie();
        this.rentedMovies.splice(index, 1);
        console.log(`${this.name} has returned "${movie.title}".`);
      } else {
        console.log(`${this.name} did not rent "${movie.title}".`);
      }
    }
  }
  
  class RentalStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
      console.log(`"${movie.title}" has been added to the movie store.`);
    }
  
    rentMovie(customer, movieTitle) {
      const movie = this.movies.find((m) => m.title === movieTitle);
  
      if (movie) {
        customer.rentMovie(movie);
      } else {
        console.log(`Sorry, "${movieTitle}" is not available in the movie store.`);
      }
    }
  
    returnMovie(customer, movieTitle) {
      const movie = customer.rentedMovies.find((m) => m.title === movieTitle);
  
      if (movie) {
        customer.returnMovie(movie);
      } else {
        console.log(`${customer.name} did not rent "${movieTitle}" from this store.`);
      }
    }
  }
  
  // Example usage
  const movieStore = new RentalStore();
  
  const movie1 = new Movie("Inception", "Sci-Fi", 5);
  const movie2 = new Movie("The Shawshank Redemption", "Drama", 3);
  
  movieStore.addMovie(movie1);
  movieStore.addMovie(movie2);
  
  const customer1 = new Customer("Alice");
  const customer2 = new Customer("Bob");
  
  movieStore.rentMovie(customer1, "Inception");
  movieStore.rentMovie(customer2, "The Shawshank Redemption");
  
  customer1.returnMovie(movie1);
  customer2.returnMovie(movie2);
  